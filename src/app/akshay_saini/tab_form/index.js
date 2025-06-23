Solution approach is pretty -> 

1. make a usestate that will remeber the current selected tab
2. make another usestate that will hold all value 
3. make all components seperatly and use as a config  driven ui like this 

    const config=[
        {
            name:"profile",
            component: Profile
        },
        {
            name:"setting",
            component: Setting
        }
    ]

    const ActiveComponent=config[activeIndex].component;
    then use as this <ActiveComponent data={data} setData={setData}/>   

// it is in ,js bcz i will implement it while i will get time, currently with full time job cant managae properly

