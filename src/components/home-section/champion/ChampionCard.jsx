import { useRef, useState } from 'react'
import './champion-card.scss'

const ChampionCard = (props) => {
    const item = props.item

    const cardRef = useRef(null)

    const onClick = () => {
      const img = cardRef.current.querySelector('img')
      const pos = img.getBoundingClientRect()
      
      const newNode = img.cloneNode(true)
      newNode.style.width = img.offsetWidth + 'px'
      newNode.style.height = img.offsetHeight + 'px'
      newNode.style.position = 'absolute'
      newNode.style.top = pos.top + 'px'
      newNode.style.left = pos.left + 'px'
      newNode.style.zIndex = '102'
      newNode.style.transition = 'all 0.7s ease'

      newNode.id = `champ-img-${props.id}`

      setTimeout(() => {
        newNode.style.width = 'auto'
        newNode.style.height = '100%'
        newNode.style.top = 0
        newNode.style.left = 0
      },500)

      document.body.appendChild(newNode)

      const videoUrl = `https://www.youtube.com/embed/${item.video}`
      document.querySelector(`#champ-detail-${props.id} iframe`).setAttribute('src', videoUrl)
      document.querySelector(`#champ-detail-${props.id}`).classList.add('active')
    }
  

  return (
    <div className="champion-card" ref={cardRef} onClick={onClick}>
        <div className="frame">
            <div className="bg-image overlay bg" style={{backgroundImage: `url(${item.bg})`}}></div>
        </div>
        <img src={item.img} alt="" />
        <div className="name">{item.name}</div>
    </div>
  )
}

export default ChampionCard