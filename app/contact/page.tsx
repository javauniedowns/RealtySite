export default function contact() {
  return (
    <div title='body'>

      <div style={styles.inputBoxContainer}>
        <input style={styles.inputBox} placeholder='First Name'></input>
        <input style={styles.inputBox} placeholder='Last Name'></input>
        <input style={styles.inputBox} placeholder='Message'></input>
        <input style={styles.inputBox} placeholder='Email'></input>
        <input style={styles.inputBox} placeholder='Phone'></input>
        <input style={styles.inputBox} placeholder='Cell'></input>
        <input style={styles.inputBox} placeholder='Address'></input>
        <input style={{...styles.inputBox, marginBottom: 0}} placeholder='Phone'></input>
        <button style={{ marginTop: 20, width: 150, height: 40, borderRadius: 10 }}>Submit</button>
      </div>

    </div>
  )

}

const styles: { [key: string]: React.CSSProperties}  = {

  inputBox: {
    width: 480,
    height: 40,
    backgroundColor: "white",
    color: "black",
    fontSize: 20,
    paddingInline: 10,
    borderRadius: 10,
    marginBottom: 20
  },

  inputBoxContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifySelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: 'rgba(231, 231, 231, 0.75)',
    height: '600px',
    width: '600px',
    borderRadius: 10,
    marginBottom: '300px'
  }
}