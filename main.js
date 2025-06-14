// 메뉴 버튼 클릭 시 메뉴 보이기/숨기기
function toggleMenu() {
  const menu = document.getElementById('menuList')
  menu.classList.toggle('show')
}

// 보안 섹션 제목 클릭 시 내용 펼치기/접기
document.addEventListener('DOMContentLoaded', () => {
  const sectionTitles = document.querySelectorAll('.section-title')

  sectionTitles.forEach((title) => {
    title.addEventListener('click', () => {
      const content = title.nextElementSibling
      const isVisible = content.style.display === 'block'

      // 모든 섹션 닫기 (하나만 열리고 싶을 때)
      document.querySelectorAll('.section-content').forEach((el) => {
        el.style.display = 'none'
      })

      // 클릭한 섹션만 토글
      if (!isVisible) {
        content.style.display = 'block'
      }
    })
  })
})

document.querySelector('.driver').addEventListener('click', () => {
  window.location.href = 'index.html'
})

function goToMain() {
  // 원하는 URL로 이동
  window.location.href = 'index.html' // 예: 메인 페이지가 index.html일 경우
}
