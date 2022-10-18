import React, { useEffect } from "react";
import Menu from "./CatApp/Menu";
import Content from "./CatApp/Content";
import axios from "axios";
import Modal from "./Modal/Modal";

function App() {
  const [catsList, setCats] = React.useState([]);
  const [favoriteCats, setFavoriteCats] = React.useState([])
  const [loading, setLeading] = React.useState(true);
  const [modal, setModal] = React.useState(false);
  const [modalImg, setModalImg] = React.useState('')
  const [page, setPage] = React.useState('GeneralPage')


  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=15&api_key=live_HVtDauWbu08hb8js96oKlPSUc3WSkcCeSlcRxOpfC2kN0izuWBemCNhFZ0x5J82e')
    .then((response) => {
      const cats = response.data.map((dataImg) => {
      return { id: dataImg.id, url: dataImg.url }
    })
    setTimeout(() => {
      setCats(cats)
      setLeading(false)
    }, 500)
  })
}, [])

  function addCats(e) {
    e.preventDefault()
    setLeading(true)
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_HVtDauWbu08hb8js96oKlPSUc3WSkcCeSlcRxOpfC2kN0izuWBemCNhFZ0x5J82e')
    .then((response) => {
      const cats = response.data.map((dataImg) => {
      return { id: dataImg.id, url: dataImg.url }
    })
    setTimeout(() => {
      setCats([...catsList, ...cats])
      setLeading(false)
    }, 500)
  })
  }

  function updateModal(event) {
      setModalImg(event.target.src)
      setModal(!modal)
}

  function setFavoritePage() {
    setPage('FavoritePage')
  }

  function setGeneralPage() {
    setPage('GeneralPage')
  }

  function addFavoriteCats(cat) {
    if (!favoriteCats.includes(cat)) {
      const array = cat.split('/')
      const id = array[array.length - 1].split('.')[0]
      setFavoriteCats([...favoriteCats, {id, url: cat}])
    }
  }
  console.log(favoriteCats)

  if (page === 'GeneralPage') {
    return (
      <div className="App">
        <Menu setFavoritePage={setFavoritePage} setGeneralPage={setGeneralPage}/>
        {modal && <Modal addFavoriteCats={addFavoriteCats} updateModal={updateModal} modalImg={modalImg}/>}
        {catsList.length ? <Content updateModal={updateModal} cats={catsList}/> : null}
        {loading ? <center><div className="lds-ring"><div></div><div></div><div></div><div></div></div></center> :
          <div className="elseCatButton">
            <button onClick={addCats} style={{}}>Загрузить ещё</button>
          </div>}
      </div>
    );
  } else if (page === 'FavoritePage'){
    return (
      <div className="App">
        <Menu setFavoritePage={setFavoritePage} setGeneralPage={setGeneralPage}/>
        {favoriteCats.length ? <Content updateModal={updateModal} cats={favoriteCats}/> : null}
      </div>
    );
  }
}

export default App;
