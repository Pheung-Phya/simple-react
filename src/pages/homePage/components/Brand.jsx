const Brand = ({brands}) => {
  return (
        <div className="row">

            {
                brands.map((value, index) => {
                    return (
                        <div className="col " key={index}>
                            <img className="w-100 rounded-3 border" src={value.logo} alt={value.name} height="150" />
                        </div>
                    )
                })
            }




        </div>
    )
}

export default Brand