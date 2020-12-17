import React,{useEffect,useState} from 'react'
/*State => District => Market => Commodity => Variety => data */

/*
To do

create UI for data

optioal remove bug for variety being empty



*/
import Chart from '../Charts/Chart'

import './Body.css'

import StateAPI from '../../API/StateAPI'
import DistrictApi from '../../API/DistrictApi'
import MarketApi from '../../API/MarketAPI'
import CommodityApi from '../../API/CommodityAPI'
import CommodityDataApi from '../../API/CommodityDataAPI'
import VarietyApi from '../../API/VarietyAPI'
import VarietyDataApi from '../../API/VarietyDataAPI'

function Body() {

    /* States */

    const [states,setStates] = useState([])
    const [currentState,setCurrentState] = useState("Default")
    const [isStateChange,setStateChange] = useState(false);

    useEffect(()=>{
        const call = async ()=>{
            
            var data = await StateAPI();
            //console.log("states : ", data)
            if(data.states !==undefined){
                setStates(data.states);
            }
            
        }
        if(states.length===0){
            call()
        }
    })

    const handleStateChange = (e)=>{
        setCurrentState(e.target.value);
        stateChange();
    }

    /* End States */

    /* Districts */

    const [districts,setDistricts] = useState([])
    const [currentDistrict,setCurrentDistrict] = useState("Default")
    const [isDistrictChange,setDistrictChange] = useState(false);

    useEffect(()=>{
        const call = async ()=>{
            
            
            var data = await DistrictApi({state:currentState});
            //console.log("District : ", data)
            if(data.district !==undefined){
                setDistricts(data.district);
            }
            setStateChange(false);
        }
        if(isStateChange && currentState!=="Default"){
            call()
        }
    })

    const handleDistrictChange = (e)=>{
        setCurrentDistrict(e.target.value);
        districtChange();
    }

    /* End Districts */

    /* Markets */

    const [markets,setMarkets] = useState([])
    const [currentMarket,setCurrentMarket] = useState("Default")
    const [isMarketChange,setMarketChange] = useState(false);

    useEffect(()=>{
        const call = async ()=>{
            
            
            var data = await MarketApi({state:currentState,district:currentDistrict});
            //console.log("Market : ", data)
            if(data.market !==undefined){
                setMarkets(data.market);
            }
            setDistrictChange(false);
        }
        if(isDistrictChange && currentDistrict!=="Default"){
            call()
        }
    })

    const handleMarketChange = (e)=>{
        //console.log("Market Change: ", e.target.value)
        setCurrentMarket(e.target.value);
        MarketChange();
    }

    /* End Markets */

    /* Commodity */

    const [commodities,setCommodities] = useState([])
    const [currentCommodity,setCurrentCommodity] = useState("Default")
    const [isCommodityChange,setCommodityChange] = useState(false);

    useEffect(()=>{
        const call = async ()=>{
            
            
            var data = await CommodityApi({state:currentState,district:currentDistrict,market:currentMarket});
            //console.log("Variety : ", data)
            if(data.commodity !==undefined){
                setCommodities(data.commodity);
            }
            setMarketChange(false);
        }
        if(isMarketChange && currentMarket!=="Default"){
            call()
        }
    })

    const handleCommodityChange = (e)=>{
        setCurrentCommodity(e.target.value);
        CommodityChange();
    }

    /* End Commodity */

    /* Commodity Data */

    const [data,setData] = useState({})

    useEffect(()=>{
        const call = async ()=>{
            var data = await CommodityDataApi({state:currentState,district:currentDistrict,market:currentMarket,commodity:currentCommodity});
            //console.log("Variety Data : ", data)
            if(data.data !==undefined){
                setData(data.data);
            }
            
        }
        if(isCommodityData && Object.keys(data).length===0){
            call();
        }
    })

    /* End Commodity Data */

    /* Variety */

    const [varieties,setVarieties] = useState([])
    const [currentVariety,setCurrentVariety] = useState("Default")
    const [isVarietyChange,setVarietyChange] = useState(false);

    useEffect(()=>{
        const call = async ()=>{
            
            
            var data = await VarietyApi({state:currentState,district:currentDistrict,market:currentMarket,commodity:currentCommodity});
            //console.log("Variety : ", data)
            if(data.variety !==undefined){
                setVarieties(data.variety);
            }
            setCommodityChange(false);
        }
        if(isCommodityChange && currentCommodity!=="Default"){
            call()
        }
    })

    const handleVarietyChange = (e)=>{
        setCurrentVariety(e.target.value);
        VarietyChange();
    }

    /* End Variety */

    /* Variety Data */


    useEffect(()=>{
        const call = async ()=>{
            var data = await VarietyDataApi({state:currentState,district:currentDistrict,market:currentMarket,commodity:currentCommodity,variety:currentVariety});
            //console.log("Variety Data : ", data)
            if(data.data !==undefined){
                setData(data.data);
            }
            setVarietyChange(false);
        }
        if(!isCommodityData && isVarietyChange && currentVariety!=="Default"){
            call();
        }
    })

    /* End Variety Data */

    /*onChange */

    /*onChange State */
    const stateChange = ()=>{
        setStateChange(true)
        districtChange();
        districtdefault();
    }
    /*onChange State End */

    /*onChange District */
    const districtChange =() =>{
        setDistrictChange(true)
        MarketChange()
        marketdefault()
    }
    const districtdefault = ()=>{
        setDistricts([]);
        setCurrentDistrict("Default");
        marketdefault();
    }
    /*onChange District End */

    /*onChange Market */
    const MarketChange = ()=>{
        setMarketChange(true)
        CommodityChange();
        commoditydefault()
    }
    const marketdefault = ()=>{
        setMarkets([]);
        setCurrentMarket("Default");
        commoditydefault();
    }
    /*onChange Market End */

    /*onChange Commodity */
    const CommodityChange = ()=>{
        setCommodityChange(true)
        VarietyChange()
        varietydefault()
    }
    const commoditydefault = ()=>{
        setCommodities([]);
        setCurrentCommodity("Default");
        varietydefault();
    }
    /*onChange Commodity End */

    /*onChange Variety */
    const VarietyChange = ()=>{
        setVarietyChange(true)
        varietyDatadefault();
    }
    const varietydefault = ()=>{
        setVarieties([]);
        setCurrentVariety("Default");
        varietyDatadefault();
    }
    /*onChange Variety End */

    /*onChange Variety Data */
    const varietyDatadefault = ()=>{
        setData({});
        setSubmit(false)
    }
    /*onChange Variety Data End */

    /*End OnChange */

    /* Submit */
    const [isSubmitted,setSubmit] = useState(false);
    const [isCommodityData,setCommodityData] = useState(false)
    const handleSubmit = ()=>{
        if(currentState==="Default"){
            alert("Select State");
        }else if(currentDistrict==="Default"){
            alert("Select District");
        }else if(currentMarket==="Default"){
            alert("Select Market");
        }else if(currentCommodity==="Default"){
            alert("Select Commodity");
        }else{
            if(currentVariety==="Default"){

                setCommodityData(true);
            }else{
                setCommodityData(false);
            }
            setSubmit(true);
        }
        
    }
    /*End Submit */



    return (
        <div className={"body"}>
            <div className={"body-input"}>
                <div className={"body-input-select"}>    
                    <select className={`option-state-select ${currentState==="Default"? "option-default":""} `} value={currentState} onChange ={handleStateChange} >
                        <option className={"option-default"} value={"Default"}>Select State</option>
                        {states &&
                            states.map((item,i)=>{
                                return <option className={"option-regular"} key={i} value={item}>{item}</option>
                            })

                        }
                    </select>

                    <select className={`option-district-select ${currentDistrict==="Default"? "option-default":""} ${isStateChange ? "prevent-click":""}`} value={currentDistrict} onChange ={handleDistrictChange} >
                        <option className={"option-default"} value={"Default"}>{isStateChange ? "Loading...":"Select District"}</option>
                        {districts &&
                            districts.map((item,i)=>{
                                return <option className={"option-regular"} key={i} value={item}>{item}</option>
                            })
                        }
                    </select>

                    <select className={`option-market-select ${currentMarket==="Default"? "option-default":""} ${isDistrictChange ? "prevent-click":""}`} value={currentMarket} onChange ={handleMarketChange} >
                        <option className={"option-default"} value={"Default"}>{isDistrictChange ? "Loading...":"Select Market"}</option>
                        {markets &&
                            markets.map((item,i)=>{
                                return <option className={"option-regular"} key={i} value={item}>{item}</option>
                            })
                        }
                    </select>

                    <select className={`option-commodity-select ${currentCommodity==="Default"? "option-default":""} ${isMarketChange ? "prevent-click":""}`} value={currentCommodity} onChange ={handleCommodityChange} >
                        <option className={"option-default"} value={"Default"}>{isMarketChange ? "Loading...":"Select Commodity"}</option>
                        {commodities &&
                            commodities.map((item,i)=>{
                                return <option className={"option-regular"} key={i} value={item}>{item}</option>
                            })
                        }
                    </select>

                    <select className={`option-variety-select ${currentVariety==="Default"? "option-default":""} ${isCommodityChange ? "prevent-click":""}`} value={currentVariety} onChange ={handleVarietyChange} >
                        <option className={"option-default"} value={"Default"}>{isCommodityChange ? "Loading...":"Select Variety"}</option>
                        {varieties &&
                            varieties.map((item,i)=>{
                                return <option className={"option-regular"} key={i} value={item}>{item}</option>
                            })
                        }
                    </select>
                </div>
                <div className="body-input-button">
                    <button onClick={handleSubmit}><span>Submit</span></button>
                </div>
            </div>
            <div className={"body-output"}>
            {isCommodityData && Object.keys(data).length>0 && isSubmitted &&
                <div className="body-output-chart-container">
                    {Object.keys(data).map((variety,i)=>{
                        return <div key={i} className="body-output-chart">
                            <h2>{currentCommodity}</h2>
                            <h5>{variety}</h5>
                            <Chart data={data[variety]}/>
                        </div>
                        
                    })}
                </div>
                    
                }
                {!isCommodityData && Object.keys(data).length>0 && data && isSubmitted &&
                    <div className="body-output-chart">
                        <h2>{currentCommodity}</h2>
                        <h5>{currentVariety}</h5>
                        <Chart data={data}/>
                    </div>
                }


            </div>
        </div>
    )
}

export default Body
