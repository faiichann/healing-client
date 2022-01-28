import { createContext, useEffect, useState, useContext } from "react"

interface IContextProps {
    children: any 
}

interface userData {
    token: string
    username: string | any
    avatar: string | any
  }
const AppContext = createContext<any>(null);

const AppProvider = (({children}: IContextProps) =>{

    const [stage,setStage] = useState<number>(0)
    const [isLose,setIsLose] = useState(false)
    const [isReset,setIsReset] = useState(false)
    const [isName,setIsName] = useState('')
    const [isAvatar,setIsAvartar] = useState('')
    // const nextStage = useCallback(
    //     () => {
    //         setStage(stage+1)
    //     },
    //     [],
    // )
    const nextStage = () => {
            setStage(stage+1)
        }

    const userInfo = ({ username, avatar }: userData) => {
            console.log('props: ', { username, avatar });
            setIsName(username)
            setIsAvartar(avatar)
        };

    const value ={
        nextStage,
        stage,
        setStage,
        isLose,
        setIsLose,
        userInfo,
        isName,
        isAvatar,
        isReset,
        setIsReset
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