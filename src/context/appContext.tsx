import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react"
import randomSlot from 'api/mocks/RandomSlot.json';

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

const items1 = randomSlot.Emoji
const items2 = randomSlot.Caption
const items3 = randomSlot.Rank

const AppProvider = (({children}: IContextProps) =>{
    let randomItem1 = Math.floor(Math.random() * items1.length);
    let randomItem2 = Math.floor(Math.random() * items2.length);
    let randomItem3 = Math.floor(Math.random() * items3.length);

    const [stage,setStage] = useState<number>(0)
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
    const [isEmoji,setIsEmoji] = useState(items1[randomItem1].img)
    const [isMsgBot,setIsMsgBot] = useState(items2[randomItem2].name)
    const [isColorBg,setIsColorBg] = useState(items3[randomItem3].type)
    //------------Quote------------------------//
    const [isQuote, setQuote] = useState<any>();
    const [author, setAuthor] = useState();
    const [text, setText] = useState();
    const [imgQuote, setImgQuote] = useState('');

    //------------Sound------------------------//
    const [isHangman, setHangman] = useState(false);
    const [isResult, setResult] = useState(false);

    const [cardID, setCardID] = useState('');
    const [cardInfo, setCardInfo] = useState(
        {card_id: Number,
        goal: String,
        id: String,
        rating: String,
        type: String,
        nft_card: {
            bg_color: String,
            caption: String,
            emoji: String
        },
        qoutes: {
            aurthur: String,
            img: String,
            qoute: String
        }
        }
        );
 
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
        cardID,
        cardInfo,
        setCardInfo,
        isHangman,
        setHangman,
        isResult,
        setResult
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