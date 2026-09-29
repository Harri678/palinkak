import { flavors, ingredients, popular } from "../data/data"

function Content(){
     return(
          <>
                <div className="row mb-2">
                    <div className="col-sm-4 kartya">
                         <h2>Gyakori alapanyagok</h2>

                         <ul className="list-group">
                              {ingredients.map((item, index) => (
                                   <li className="list-group-item" key={index}>{item}</li>
                              ))}
                         </ul>
                    </div>

                    <div className="col-sm-4 kartya mb-2">
                         <h2>Népszerű pálinkák</h2>

                         <ol className="list-group list-group-numbered">
                              {popular.map((item, index) => (
                                   <li className="list-group-item" key={index}>{item}</li>
                              ))}
                         </ol>
                    </div>

                    <div className="col-sm-4 kartya mb-2">
                         <h2>Íz- és illatjegyek</h2>

                         <ol className="list-group list-group-numbered">
                              {flavors.map((item, index) => (
                                   <li className="list-group-item" key={index}>{item}</li>
                              ))}
                         </ol>
                    </div>
                    </div>


                    <div className="row mb-1" id="mibolLehetMegPalinka">
                    <div className="col-sm-12 kartya mb-3">
                         <h2>Miből készülhet gyümölcspárlat?</h2>

                         <table className="table table-bordered">
                         <tbody>
                         <tr>
                              <td>Alma</td>

                              <td>Szilva</td>

                              <td>Körte</td>
                         </tr>

                         <tr>
                              <td>Meggy</td>

                              <td>Kajszi</td>

                              <td>Birsalma</td>
                         </tr>

                         <tr>
                              <td>Cseresznye</td>

                              <td>Őszibarack</td>

                              <td>Szőlő</td>
                         </tr>
                         </tbody>
                         </table>
                    </div>
               </div>
          <br />
               <div className="row">
               <div className="col-sm-12 kartya mb-3">
                    <div className="card">
                    <div className="card-header">Amit érdemes megjegyezni</div>

                    <div className="card-body">
                    <ul>
                         <li>A pálinka gyümölcsből készített párlat.</li>

                         <li>
                         Az alapanyag minősége jelentősen befolyásolja a késztermék
                         tulajdonságait.
                         </li>

                         <li>
                         A gyümölcsöt először elő kell készíteni és erjeszteni kell.
                         </li>

                         <li>
                         Az erjesztett gyümölcscefréből lepárlással készül a párlat.
                         </li>

                         <li>
                         A pálinka megnevezés használatát jogszabály szabályozza.
                         </li>
                    </ul>
                    </div>
                    </div>
               </div>
               </div>
          </>
     )
}

export default Content