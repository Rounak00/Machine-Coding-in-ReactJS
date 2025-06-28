// FileExplorer.js
import { useState } from "react";
import FileAndFolder from "./FileAndFolder.js";

const initialData = [
  {
    id: 1,
    name: "public",
    isFolder: true,
    children: [{ id: 2, name: "index.html", isFolder: false }],
  },
  {
    id: 3,
    name: "src",
    isFolder: true,
    children: [
      { id: 4, name: "App.js", isFolder: false },
      { id: 5, name: "index.js", isFolder: false },
    ],
  },
  { id: 6, name: "package.json", isFolder: false },
];

export default function FileExplorer() {
  const [data, setData] = useState(initialData);
  const [idCounter, setIdCounter] = useState(7);
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({ parentId: null, isFolder: false });
  const [inputValue, setInputValue] = useState("");

  const openModal = (parentId, isFolder) => {
    setModalInfo({ parentId, isFolder });
    setInputValue("");
    setShowModal(true);
  };

  const handleModalSubmit = () => {
    const { parentId, isFolder } = modalInfo;
    const name = inputValue.trim();
    if (!name) return;

    const newItem = {
      id: idCounter,
      name,
      isFolder,
      ...(isFolder ? { children: [] } : {}),
    };

    const updateTree = (nodes) =>
      nodes.map((node) => {
        if (node.id === parentId && node.isFolder) {
          return { ...node, children: [...(node.children || []), newItem] };
        } else if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }
        return node;
      });

    setData(updateTree(data));
    setIdCounter((prev) => prev + 1);
    setShowModal(false);
  };

  const handleRemove = (targetId) => {
    const deleteNode = (nodes) =>
      nodes
        .filter((node) => node.id !== targetId)
        .map((node) =>
          node.children
            ? { ...node, children: deleteNode(node.children) }
            : node
        );

    setData(deleteNode(data));
  };

  return (
    <div>
      <h2>File Explorer</h2>
      <FileAndFolder 
        data={data} 
        onAdd={openModal} 
        onRemove={handleRemove} 
      />
      
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h3>Enter {modalInfo.isFolder ? "folder" : "file"} name</h3>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              autoFocus
            />
            <div style={{ marginTop: "10px" }}>
              <button onClick={handleModalSubmit} data-testid="add">Add</button>
              <button onClick={() => setShowModal(false)} data-testid="cancel">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// FileAndFolder.js
import { useState } from "react";

const FileAndFolder = ({ data, onAdd, onRemove }) => {
  const [expandedFolders, setExpandedFolders] = useState({});

  const toggleFolder = (folderId) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderId]: !prev[folderId]
    }));
  };

  return (
    <div style={{ textAlign: "left" }}>
      {data.map((item) => (
        <div key={item.id} style={{ marginLeft: "20px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {item.isFolder ? (
              <span 
                onClick={() => toggleFolder(item.id)}
                style={{ cursor: "pointer", marginRight: "5px" }}
              >
                {expandedFolders[item.id] ? "📂" : "📁"}
              </span>
            ) : (
              <span style={{ marginRight: "5px" }}>📄</span>
            )}
            <span>{item.name}</span>
            <button 
              onClick={() => onAdd(item.id, true)}
              style={{ marginLeft: "10px" }}
            >
              +Folder
            </button>
            <button 
              onClick={() => onAdd(item.id, false)}
              style={{ marginLeft: "5px" }}
            >
              +File
            </button>
            <button 
              onClick={() => onRemove(item.id)}
              style={{ marginLeft: "5px", color: "red" }}
            >
              Delete
            </button>
          </div>
          {item.isFolder && expandedFolders[item.id] && item.children && (
            <FileAndFolder 
              data={item.children} 
              onAdd={onAdd} 
              onRemove={onRemove} 
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FileAndFolder;



//CSS
/* styles.css */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
  min-width: 300px;
}

button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}