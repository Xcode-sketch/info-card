document.addEventListener('DOMContentLoaded', function() {
  const profileImg = document.querySelector('.card-image img');
  if (profileImg) {
    profileImg.addEventListener('click', function() {
      profileImg.classList.toggle('zoomed');
    });
  }

  const socialLinks = document.querySelectorAll('.card-social a[data-social]');
  const previewCard = document.getElementById('preview-card');
  const previewIcon = document.getElementById('preview-icon');
  const previewTitle = document.getElementById('preview-title');
  const previewLink = document.getElementById('preview-link');
  const previewClose = document.getElementById('preview-close');

  const socialData = {
    linkedin: {
      title: 'LinkedIn',
      icon: "<i class='bxl bx-linkedin' style='font-size:3em;color:#0077b5'></i>",
      link: 'https://www.linkedin.com/in/eduardo-barbosa-silva-896635363'
    },
    github: {
      title: 'GitHub',
      icon: "<i class='bxl bx-github' style='font-size:3em;color:#333'></i>",
      link: 'https://github.com/Xcode-sketch'
    },
    gmail: {
      title: 'Gmail',
      icon: "<i class='bxl bx-gmail' style='font-size:3em;color:#d44638'></i>",
      link: 'mailto:eduardobarbosasilva.ofical@outlook.com'
    }
  };

  socialLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const social = link.getAttribute('data-social');
      if (socialData[social]) {
        previewIcon.innerHTML = socialData[social].icon;
        previewTitle.textContent = socialData[social].title;
        previewLink.href = socialData[social].link;
        previewCard.style.display = 'flex';
      }
    });
  });

  previewClose.addEventListener('click', function() {
    previewCard.style.display = 'none';
  });
});
