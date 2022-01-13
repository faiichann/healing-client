import { createContext, useEffect, useState, useContext } from "react"

interface IContextProps {
    children: any 
}

const AppContext = createContext<any>(null);

const AppProvider = (({children}: IContextProps) =>{

    const [stage,setStage] = useState<number>(0)
    const [isLose,setIsLose] = useState(false)
    // const nextStage = useCallback(
    //     () => {
    //         setStage(stage+1)
    //     },
    //     [],
    // )
    const nextStage = () => {
            setStage(stage+1)
        }

    const value ={
        nextStage,
        stage,
        setStage,
        isLose,
        setIsLose
    }

    useEffect(() => {
       console.log('stage', stage)
    }, [stage])

    return<AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
})

const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error(" error contect")
    }
    return context
}

export { AppContext, AppProvider, useAppContext  }