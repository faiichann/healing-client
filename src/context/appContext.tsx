import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react"

interface IContextProps {
    children: any 
}

interface userData {
    token: string
    username: string | any
    avatar: string | any
  }

  interface goalData {
    typeGoal: string | any
    msgGoal: string | any
    starRate: number | any
  }

  interface cardRandomData {
    emoji: string | any
    msgbot: string | any
    colorbg: string | any
  }
const AppContext = createContext<any>(null);

const AppProvider = (({children}: IContextProps) =>{

    const [stage,setStage] = useState<number>(4)
    const [isLose,setIsLose] = useState(false)
    const [isReset,setIsReset] = useState(false)

    const [cardNum,setCardNum] = useState<number>(0)
    //------------Data 1------------------------//
    const [isName,setIsName] = useState('USER001')
    const [isAvatar,setIsAvartar] = useState('')
     //------------Data 2------------------------//
    const [isGoalType,setIsGoalType] = useState('')
    const [isGoalMsg,setIsGoalMsg] = useState('')
    const [isRateStar,setRateStar] = useState(0)
    //------------DAta 3------------------------//
    const [isEmoji,setIsEmoji] = useState('')
    const [isMsgBot,setIsMsgBot] = useState('')
    const [isColorBg,setIsColorBg] = useState('')
    //------------Quote------------------------//
    const [isQuote, setQuote] = useState<any>();
    const [author, setAuthor] = useState();
    const [text, setText] = useState();
    const [imgQuote, setImgQuote] = useState('');
    const [cardID, setCardID] = useState(7);

    const nextStage = () => {
            setStage(stage+1)
        }

    const userInfo = ({ username, avatar }: userData) => {
            console.log('props: ', { username, avatar });
            setIsName(username)
            setIsAvartar(avatar)
        };

    const goalInfo = ({ typeGoal, msgGoal , starRate}: goalData) => {
            console.log('props: ', { typeGoal, msgGoal, starRate });
            setIsGoalType(typeGoal)
            setIsGoalMsg(msgGoal)
            setRateStar(starRate)
            nextStage()
        };
    
    const cardRandomInfo = ({ emoji, msgbot, colorbg }: cardRandomData) => {
            console.log('props: ', { emoji, msgbot, colorbg });
            setIsEmoji(emoji)
            setIsMsgBot(msgbot)
            setIsColorBg(colorbg)
        };

    const getQuotes = async() =>{
            try {
                await axios.get('https://type.fit/api/quotes').then(async (response) => {
                    if(response) {
                        await setQuote(response.data);
                        let random = await Math.floor(Math.random() * response.data.length)
                        await setText(response.data[random].text);
                        await setAuthor(response.data[random].author);
                        setImgQuote("https://api.thecatapi.com/v1/images/search")
                    }
                  });
            } catch (err) {
                console.error(err);
            }
        }

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
        setIsReset,
        goalInfo,
        cardRandomInfo,
        isGoalType,
        isGoalMsg,
        isRateStar,
        isEmoji,
        isMsgBot,
        isColorBg,
        cardNum,
        setCardNum,
        getQuotes,
        isQuote,
        author,
        text,
        imgQuote,
        setCardID,
        cardID
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