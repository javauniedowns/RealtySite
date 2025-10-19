export default function About() {
  return (
    <div> {/*vh ignores parent height*/}


      <div style={{ justifySelf: 'center', width: '90%', paddingInline: 100, marginTop: 100, backgroundColor: 'rgba(240, 240, 240, 1)', borderRadius: 20, padding: 50 }}>

        <div style={{ display: "flex", flexDirection: "row", paddingTop: 20 }}>
          <img style={{ width: "20%", borderRadius: 20 }} src="https://bay.cdn.bkat.io/cust/bay_c21_gold_key/images/agents/8455181950/8455181950_20220720142927409.jpg"></img>

          <div style={{ display: 'flex', flexDirection: "column", marginLeft: 20 }}>
            <h2 style={{color:'black', marginBottom:40, marginTop:30}}>Donielle Haughton</h2>
            <a style={{ ...styles.text, marginTop: 0, marginBottom: 10 }}>
              <img src="/phone-504.png" style={{ height: 20, width: 20 }}></img>    302 722-5444</a>
            <a style={{ ...styles.text, marginTop: 0, marginBottom: 10 }}>
              <img src="/old-vintage-red-telephone-16597.png" style={{ height: 20, width: 20 }}></img>    302 338-8180</a>
            <a style={{ ...styles.text, marginTop: 0, marginBottom: 10 }}>
              <img src="/globe-4286.png" style={{ height: 20, width: 20 }}></img>    dhaughton@c21gk.com</a>
          </div>
        </div>

        <p style={styles.text2}>Donielle Haughton is a licensed real estate agent in Delaware. She is highly motivated self-starter
          who has built her personal and professional legacy on hard work, dedication, communication, respect, and transparency.</p>

        <p style={styles.text2}>With over 15 years of experience in Sales and Marketing, Donielle has a way of “seeing through the
          lenses of her clients” while providing them with knowledgeable, reliable and trustworthy information.</p>

        <p style={styles.text2}>Prior to joining the real estate industry, Donielle successfully directed and managed multiple
          Corporate Sales teams at various hotels in the Hospitality and Management Industry.</p>

        <p style={styles.text2}>Donielle graduated from Wilmington University where she obtained a Bachelor of Science degree in
          Accounting with a minor in Finance. Donielle effortlessly combines her excellent customer service persona with her strong
          negotiation and problem-solving skills by making her clients feel at ease while working diligently on their behalf to
          achieve the best possible outcome.</p>

      </div>

    </div>

  )
}

const styles = {
  button: {
    color: "pink",
    borderWidth: 2
  },

  text: {
    color: 'black',
    fontSize: 20,
    marginTop: 40
  },

  text2: {
    color: 'black',
    fontSize: 23,
    marginTop: 40
  }
}
