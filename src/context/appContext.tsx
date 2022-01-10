import { createContext, useEffect, useState, useContext } from "react"

interface IContextProps {
    children: any 
}

const AppContext = createContext<any>(null);

const AppProvider = (({children}: IContextProps) =>{

    const [stage,setStage] = useState<number>(1)
    const [visible, setVisible] = useState(false)
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
        visible, 
        setVisible,
        setStage
    }

    useEffect(() => {
       console.log('stage', stage)
       console.log('Modal', visible)
    }, [stage, visible])

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