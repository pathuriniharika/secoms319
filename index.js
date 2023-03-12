fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('.container');
    data.jobs.forEach(job => {
      const jobListing = document.createElement('div');
      jobListing.classList.add('job-listing');
      
      const jobTitle = document.createElement('div');
      jobTitle.classList.add('job-title');
      jobTitle.innerText = job.jobTitle;
      
      const companyTitle = document.createElement('div');
      companyTitle.classList.add('company-title');
      companyTitle.innerText = job.companyTitle;
      
      const jobDescription = document.createElement('div');
      jobDescription.classList.add('job-description');
      jobDescription.innerText = job.jobDescription;
      
      const applyNowLink = document.createElement('a');
      applyNowLink.classList.add('apply-now-link');
      applyNowLink.setAttribute('href', job.applyNowLink);
      applyNowLink.innerText = 'Apply Now';
      
      const imgContainer = document.createElement('div');
      imgContainer.classList.add('img-container');
      
      job.pictures.forEach(picture => {
        const img = document.createElement('img');
        img.setAttribute('src', `images/${picture.filename}`);
        img.setAttribute('alt', picture.caption);
        img.setAttribute('width', '200'); 
        img.setAttribute('height', '150'); 
        imgContainer.appendChild(img);
      });
      
      jobListing.appendChild(imgContainer);
      
      jobListing.appendChild(imgContainer);
      jobListing.appendChild(jobTitle);
      jobListing.appendChild(companyTitle);
      jobListing.appendChild(jobDescription);
      jobListing.appendChild(applyNowLink);
      
      container.appendChild(jobListing);
    });
  })
  .catch(error => console.error(error));
