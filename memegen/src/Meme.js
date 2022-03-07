import React from 'react'

import "./App.css"

function Meme() {

    const [meme,setMeme]=React.useState({
        topText:" ",
        bottomText:" ",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const[allMemes,setAllMemes]=React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data =>setAllMemes(data.data.memes))
    },[])
  
  function getMemeImage(){
      const randomNumber = Math.floor(Math.random() * allMemes.length)
      const url = allMemes[randomNumber].url
      setMeme(prevMeme => ({
          ...prevMeme,
          randomImage:url
      }))
  }

  function handleChange(event){
      const{name,value} = event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))
  }
    return (
    <main>
       <div className='form'>
           <input placeholder='Top text'
           className='form--input'
           type="text"
           name="topText"
           value={Meme.topText}
           onChange={handleChange}/>

           <input 
           type="text"
           placeholder='Bottom text'
           className='form--input'
           value={Meme.bottomText}
           onChange={handleChange}
           name="bottomText"/>
           <button 
           className='form--button'
           onClick={getMemeImage}>
               Get the Random image
           </button>

       </div>
       <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
    </main>
  )
}

export default Meme