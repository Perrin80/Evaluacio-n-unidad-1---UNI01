class GradesController {
  constructor () {
    this.renderGradesResult = this.renderGradesResult.bind(this)
  }

  calculateAverage (grades) {
    return grades = ((grades[0] * (grades[1]/100)) * grades[2])
  }

  renderGrades (req, res) {
    res.render('grades')
  }

  renderGradesResult (req, res) {
    console.log('req.body', req.body)
    const { capital, tasa, years } = req.body
    const grades = [
      parseInt(capital),
      parseInt(tasa),
      parseInt(years)
    ]

    const interest = this.calculateAverage(grades)

    res.render('grades', {
      capital,
      tasa,
      years,
      interest
    })
  }
}

module.exports = GradesController