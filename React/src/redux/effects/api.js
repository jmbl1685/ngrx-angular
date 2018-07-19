export const fetchData = async () => {
  try {
    const response = await fetch('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.json')
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}
