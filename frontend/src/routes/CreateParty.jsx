import partFetch from "../axios/config"

import { useState, useEffect } from "react"

import { useNavigate } from "react-router-dom"

import "./Form.css"

const CreateParty = () => {
  const [services, setServices] = useState([])

  //Load Services

  useEffect(() => {
    const loadServices = async () => {
      const res = await partFetch.get("/services")

      setServices(res.data)
    }
    loadServices()
  }, [])


  return (
    <div className="form-page">
      <h2>Crie a sua proxima Festa</h2>
      <p>Defina o seu orçamento e escolha o serviço</p>
      <form >
        <label>
          <span>Nome da festa:</span>
          <input type="text" placeholder="Seja criativo..." required />
        </label>
        <label>
          <span>Anfitrião:</span>
          <input type="text" placeholder="Quem esta dando a festa?" required />
        </label>
        <label>
          <span>Descrição:</span>
          <textarea placeholder="Conte mais sobre a festa..." required />
        </label>
        <label>
          <span>Orçamento;</span>
          <input type="number" placeholder="Quanto voce pretende investir?" required />
        </label>
        <label >
          <span>Image:</span>
          <input type="text" placeholder="Insira URL de una inagen" required />
        </label>
        <div>
          <h2>Escolha os serviços</h2>
          <div className="servicos-container">
            {services.length === 0 && <p>Carregando...</p>}
            {services.length > 0 && services.map((service) => (
              <div className="service" key={service._Id}>
                <img src={service.image} alt={service.name} />
                <p className="service-name">{service.name}</p>
                <p className="service-price">R${service.price}</p>
                <div className="checkbox-container">
                  <input type="checkbox" value={service._Id} />
                  <p>Marque para solicitar</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <input type="submit" value="Criar Festa" className="btn" />
      </form>
    </div>
  )
}

export default CreateParty