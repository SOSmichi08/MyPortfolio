document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const loggedInAs = document.getElementById('loggedInAs');
    const documentsList = document.getElementById('documentsList');
  
    if (loggedInUser === 'Employer') {
      loggedInAs.textContent = `Logged in as: Employer`;
      loadDocumentsForEmployer();
      const addDocumentBtn = document.getElementById('addDocumentBtn');
      addDocumentBtn.style.display = 'none';
  
      const removeDocumentBtn = document.getElementById('removeDocumentBtn');
      removeDocumentBtn.style.display = 'none';

    } else if (loggedInUser === 'Admin') {
      loggedInAs.textContent = `Logged in as: Admin`;
      loadDocumentsForAdmin();
      const addDocumentBtn = document.getElementById('addDocumentBtn');
      addDocumentBtn.style.display = 'inline-block';
  
      const removeDocumentBtn = document.getElementById('removeDocumentBtn');
      removeDocumentBtn.style.display = 'inline-block';
  
      addDocumentBtn.addEventListener('click', function() {
        fileInput.click();
      });
  
      removeDocumentBtn.addEventListener('click', function() {
        const documentName = prompt('Enter document name to remove:');
        if (documentName) {
          const documentToRemove = Array.from(documentsList.children).find(child => {
            if (child.tagName === 'A' && child.textContent === documentName) {
              return child;
            }
          });
  
          if (documentToRemove) {
            documentToRemove.remove();
            alert(`Document "${documentName}" removed successfully.`);
          } else {
            alert(`Document "${documentName}" not found.`);
          }
  
        }
      });
    }
  
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.multiple = true;
    fileInput.style.display = 'none'; 
  
    fileInput.addEventListener('change', function() {
      const fileList = fileInput.files;
  
      for (let i = 0; i < fileList.length; i++) {
        const newDocument = {
          name: fileList[i].name,
          url: URL.createObjectURL(fileList[i])
        };
  
        const docLink = document.createElement('a');
        docLink.href = newDocument.url;
        docLink.textContent = newDocument.name;
        docLink.setAttribute('target', '_blank');
        documentsList.appendChild(docLink);
        documentsList.appendChild(document.createElement('br'));
  
        alert(`Document "${newDocument.name}" added successfully.`);
      }
    });
  
    function loadDocumentsForEmployer() {
      const documents = [
        { name: 'Neolution Internship Assessment', url: 'https://drive.google.com/file/d/1zB4AJZ1ZWl9A8ENlLD9j6ZH1gVOGnmvx/view?usp=drive_link' },
        { name: 'Report Cards (Primary and Secondary School)', url: 'https://drive.google.com/file/d/17n4heGtBatCuY5R19w20kIO21eghlJZN/view?usp=drive_link'},
        { name: 'Multicheck Certificate', url: 'https://drive.google.com/file/d/1NAaxa8ixHzA-j1lwudR0Kwe51piN33IA/view?usp=drive_link'},
        { name: 'Stellwerk Exam Score', url: 'https://drive.google.com/file/d/17d2CMY9Z5FJWZtH-7eYTh058Rgzz2Jx9/view?usp=drive_link'},
        { name: 'First Certificate English Score', url: 'https://drive.google.com/file/d/1dwirI0pbRzq2KZEnHpuTpZsg-vrmRAfw/view?usp=drive_link'},
        { name: 'BMS Exam Score', url: 'https://drive.google.com/file/d/1uiR7fz_Pt3K7Q_Sx54fXAOpkpxOdPmNX/view?usp=drive_link' }
      ];
      renderDocuments(documents);
    }
  
    function loadDocumentsForAdmin() {
      const documents = [
        { name: 'BMS Exam Score', url: 'https://drive.google.com/file/d/1zB4AJZ1ZWl9A8ENlLD9j6ZH1gVOGnmvx/view?usp=drive_link' },
        { name: 'Report Cards (Primary and Secondary School)', url: 'https://drive.google.com/file/d/17n4heGtBatCuY5R19w20kIO21eghlJZN/view?usp=drive_link'},
        { name: 'Multicheck Certificate', url: 'https://drive.google.com/file/d/1NAaxa8ixHzA-j1lwudR0Kwe51piN33IA/view?usp=drive_link'},
        { name: 'Stellwerk Exam Score', url: 'https://drive.google.com/file/d/17d2CMY9Z5FJWZtH-7eYTh058Rgzz2Jx9/view?usp=drive_link'},
        { name: 'First Certificate English Score', url: 'https://drive.google.com/file/d/1dwirI0pbRzq2KZEnHpuTpZsg-vrmRAfw/view?usp=drive_link'},
        { name: 'Neolution Internship Assessment', url: 'https://drive.google.com/file/d/1uiR7fz_Pt3K7Q_Sx54fXAOpkpxOdPmNX/view?usp=drive_link' }
      ];
      renderDocuments(documents);
    }
  
    function renderDocuments(documents) {
      documents.forEach(doc => {
        const docLink = document.createElement('a');
        docLink.href = doc.url;
        docLink.textContent = doc.name;
        docLink.setAttribute('target', '_blank');
        docLink.classList.add('document-link'); 
        docLink.style.color = '#375a7f'; 
        docLink.style.textDecoration = 'none'; 
        documentsList.appendChild(docLink);
        documentsList.appendChild(document.createElement('br'));
      });
    }
  });
  