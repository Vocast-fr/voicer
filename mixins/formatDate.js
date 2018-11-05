import moment from 'moment'

const formatDate = {
  methods: {
    formatDate (date) {
      return moment(date).locale('fr').format(`DD MMMM Y`)
    },
  },
}

export default formatDate