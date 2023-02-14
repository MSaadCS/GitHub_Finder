export const About = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="about">
            <h1 className="text-white text-center mb-3"> GitHub Finder</h1>
            <div className="about_details" style={{backgroundColor: 'white',padding: '20px 20px',borderRadius:'10px'}}>
              <h3 className="text-dark mb-4 font-weight-bold">About This App</h3>
              <p className="text-dark mb-2">This is a react Github finder application by username </p>
              <p className="text-dark mb-2">Version : 1.0.0</p>
              <p className="text-dark mb-2">Developed By : Mohamed Adel</p>
              <p className="text-dark mb-2">Email : mohamed.adelsaad93@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
