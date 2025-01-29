function toggleMode() {
  document.body.classList.toggle('dark')
  updateToggleIcon()
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }
}

function updateToggleIcon() {
  const toggleIcon = document.querySelector(
    '.theme-switch .theme-switch-pointer'
  )

  if (document.body.classList.contains('dark')) {
    toggleIcon.classList.remove('light')
    toggleIcon.classList.add('dark')
  } else {
    toggleIcon.classList.remove('dark')
    toggleIcon.classList.add('light')
  }
}

window.onload = function () {
  const theme = localStorage.getItem('theme')
  if (theme === 'dark') {
    document.body.classList.add('dark')
  }
  updateToggleIcon()
}
