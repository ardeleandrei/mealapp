
const API_URL = 'https://www.themealdb.com/api/json/v1/1'

const getMeal = async () => {
  try {
    const response = await fetch(
      API_URL + '/random.php'
    )
    const data = await response.json()
    return data.meals[0]
  } catch (e) {
    console.log('Error is: ' + e)
  }
}

const getCategories = async () => {

}

export {
  getMeal,
  getCategories
}
