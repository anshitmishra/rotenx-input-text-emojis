import React, { useEffect, useState } from "react";
import styles from './styles.module.css'
import Emoji from "./emojies.json"

export const Input = ({onChange,onEnter }) => {
  const [text, setText] = useState("");
  const [displayEmoji, setDisplayEmoji] = useState("none")
  const [emojiSearch, setEmojiSearch] = useState("")
  const [emojiContainer, setEmojiContainer] = useState("none")
  const [emojiLimit, setEmojiLimit] = useState(500)
  const DisplayEmoji = (event) => {
    if (event.pageY > 400) {
      setEmojiContainer("bottom");
    } else {
      setEmojiContainer("top");
    }
    if (displayEmoji === "none") {
      setDisplayEmoji("block")
    } else {
      setDisplayEmoji("none")
    }
  }

  const [emojiData, setEmojiData] = useState ([]);
  const EmojiFetch = () => {
    setEmojiData(Emoji)
  }
  const TextHandler = (value) => {
    const emoji = value;
    setText(text + emoji);
    onChange(text + emoji)
    setDisplayEmoji("none");
  }

  // onenter event handler
  const OnEnterHandler = (event) => {
    if (event.key === 'Enter') {
      onEnter(text);
      setText("");
      setDisplayEmoji("none");
    }
  }


  useEffect(() => {
    EmojiFetch();
  }, [])



  return <div className={styles.maininputcontainer} >
    <input type="text" onChange={(e) => { setText(e.target.value); onChange(e.target.value) }} onKeyDown={OnEnterHandler} value={text} placeholder="type your message" className={styles.maininputcontainerinput}></input>
    <div className={styles.maininputcontainerinputp}>
      <p onClick={(e) => { DisplayEmoji(e); }}>&#x1F600;
      </p>
      <div style={{ display: `${displayEmoji}`, top: `${emojiContainer === "top" ? "0" : "auto"}`, bottom: `${emojiContainer === "bottom" ? "0" : "auto"}` }} className={styles.maininputcontainerinputdiv} >
        <div className={styles.maininputcontainerinputdivsearch}>
          <input type={"text"} placeholder="search" onChange={(e) => { setEmojiSearch(e.target.value) }} />
        </div>
        <div className={styles.maininputcontainerinputdivpromo} >
          <p>RotenX Git Repo</p>
          <a href="https://github.com/anshitmishra/rotenx-input-emoji" ><span>Click here</span></a>
        </div>
        <div className={styles.maininputcontainerinputdivitem} >
          {emojiData.filter((unicodeName) => unicodeName.unicodeName.includes(emojiSearch)).slice(0, emojiLimit).map((value, index) => {
            return (
              <span key={index} onClick={() => { TextHandler(value.character) }}>{value.character}</span>
            )
          })}
          <p style={{ display: `${emojiLimit > 2500 ? "none" : "block"}` }} onClick={() => setEmojiLimit(emojiLimit + 500)}>more</p>
        </div>

      </div>
    </div>
  </div>
}
