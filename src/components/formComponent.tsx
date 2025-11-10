


export const FormComponent = () => {
  return (
    
      <div className="form-container bg-amber-50 animate-fade-up animate-ease-in-out animate-delay-[1500ms]">
        <form className="form">
          <div className="form-group">
            <label htmlFor="email">Company Email</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">How Can We Help You?</label>
            <textarea name="textarea" id="textarea" rows={10} cols={50} required defaultValue={"          "} />
          </div>
          <button className="bg-black text-gray-400 hover:bg-amber-50 hover:text-black" type="submit">Submit</button>
        </form>
      </div>
    
  );
}

 

