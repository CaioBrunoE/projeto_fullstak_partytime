
const CreateParty = () => {
  return (
    <div className="Form-page">
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
          <div className="servicos-containet">
            <p>Serviços</p>
          </div>
        </div>
        <input type="submit" value="Criar Festa" className="btn" />
      </form>
    </div>
  )
}

export default CreateParty