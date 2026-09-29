function Header() {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 kartya mb-3">
          <div className="mt-2 mb-1 p-5 bg-primary text-white rounded">
            <h1>REACT gyakorlás: Komponensekre bontás</h1>
            <p className="mb-0">
              Téma: Pálinkák és gyümölcspárlatok
            </p>
          </div>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              Mit érdemes tudni a pálinkáról?
            </div>
            <div className="card-body">
              <p>
                A pálinka a magyar gasztronómiai és kulturális
                hagyományok egyik ismert itala. Készítése során
                erjesztett gyümölcsből lepárlással állítanak elő
                gyümölcspárlatot.
              </p>
              <p>
                A pálinka készítésének egyik fontos alapanyaga
                a megfelelő minőségű, érett gyümölcs. Gyakori
                alapanyag például az alma, a szilva, a körte,
                a meggy és a kajszibarack.
              </p>
              <p className="mb-0">
                A jó minőségű pálinka készítésénél az alapanyag
                minősége és a megfelelő technológia egyaránt fontos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;