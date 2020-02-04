export default {
  changeCity1 (state, city1) {
    state.city = city1
    try {
      localStorage.city = city1
    } catch (e) { }
  }
}
