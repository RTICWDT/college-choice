import _ from 'lodash'

export const capitalize = (value) => {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export const formatUrl = (url) => {
  if (!url) return null
  else if (String(url).indexOf('http') !== 0) {
    return 'http://' + url
  } else {
    return url
  }
}

export const formatUrlText = (value) => {
  return value
    .replace(/^https?:\/\//i, "")
    .split('/')
    .shift()
    .replace(/^www\./, '')
}

export const formatYearsLabel = (value) => {
  if (value > 1) return 'Year'
  else if (value == 1) return "Certificate"
  else return false
}

export const yearsClass = (value) => {
  switch (+value) {
    case 2: return 'icon-two'
    case 3: return 'icon-four'
  }
  return 'icon-certificate'
}

export const yearsText = (value) => {
  switch (+value) {
    case 1: return 'Certificate'
    case 2: return '2-yr'
    case 3: return '4-yr'
  }
  return '4-yr'
}

export const control = (id) => {
  const lookup = {
    '-1': 'Unknown',
    '1': 'Public',
    '2': 'Private Nonprofit',
    '3': 'Private For-Profit'
  }
  return lookup[id]
}

export const controlClass = (id) => {
  const lookup = {
    '1': 'icon-public',
    '2': 'icon-private',
    '3': 'icon-profit'
  }
  return lookup[id]
}

export const sizeCategory = (size) => {
  let text = 'size unknown'
  if (_.inRange(size, 0, 2000)) text = 'Small'
  else if (_.inRange(size, 2000, 15000)) text = 'Medium'
  else if (_.inRange(15000, Infinity)) text = 'Large'
  return text
}

export const sizeCategoryClass = (size) => {
  let text = 'size unknown'
  if (_.inRange(size, 0, 2000)) text = 'icon-small'
  else if (_.inRange(size, 2000, 15000)) text = 'icon-medium'
  else if (_.inRange(15000, Infinity)) text = 'icon-large'
  return text
}

export const locale = (id) => {
  const lookup = {
    '-1': "Locale Unknown",
    '11': 'City',
    '12': 'City',
    '13': 'City',
    '21': 'Suburban',
    '22': 'Suburban',
    '23': 'Suburban',
    '31': 'Town',
    '32': 'Town',
    '33': 'Town',
    '41': 'Rural',
    '42': 'Rural',
    '43': 'Rural'
  }
  return lookup[id]
}

export const localeClass = (id) => {
  const lookup = {
    '-1': "unknown",
    '11': 'icon-city',
    '12': 'icon-city',
    '13': 'icon-city',
    '21': 'icon-suburban',
    '22': 'icon-suburban',
    '23': 'icon-suburban',
    '31': 'icon-town',
    '32': 'icon-town',
    '33': 'icon-town',
    '41': 'icon-rural',
    '42': 'icon-rural',
    '43': 'icon-rural'
  }
  return lookup[id]
}

export const formatFieldOfStudyTitle = (value) => {
  if (!value) return value
  value = value.toString()
  return value.slice(-1) === '.' ? value.slice(0, -1) : value
}

export const formatCip2Title = (value) => {
  if (!value) return value
  value = value.toString()
  let returnString = value.slice(-1) === '.' ? value.slice(0, -1) : value
  return _.startCase(returnString.toLowerCase())
}

export const formatFieldOfStudyCredentialTitle = (value) => {
  switch (value) {
    case "Bachelors Degree":
      return "Bachelor's Degree"
    case "Undergraduate Certificate or Diploma":
      return "Certificate"
    default:
      return value
  }
}

export const unflattenObject = (obj) => {
  const result = {};
  
  for (const key in obj) {
    const keys = key.split('.');
    let current = result;
    
    for (let i = 0; i < keys.length; i++) {
      if (i === keys.length - 1) {
        current[keys[i]] = obj[key];
      } else {
        current[keys[i]] = current[keys[i]] || {};
        current = current[keys[i]];
      }
    }
  }
  
  return result;
}