export default function Search() {
  return (
    <div title='body'>

      <div style={{ display: 'flex', justifySelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 50, backgroundColor: 'rgba(231, 231, 231, 0.75)', height: '80px', width: '600px', borderRadius: 10 }}>
        <input style={{ width: 480, height: 40, backgroundColor: "white", color: "black", fontSize: 20, paddingInline: 10, borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }} placeholder='city, postal code, address...'></input>
        <button style={{ height: '50%', width: '80px', borderBottomRightRadius: 10, borderTopRightRadius: 10, borderColor: 'black' }}>Search</button>
      </div>

      <div title='listingBox' style={{ display: 'flex', justifyContent: 'center', marginTop: 100, width: '100%', backgroundColor: 'rgba(231, 231, 231, 0.75)', height: "800px" }}>
        <h1 style={{ color: 'black', paddingTop: 50 }}>All Properties</h1>
      </div>

    </div>
  )

}