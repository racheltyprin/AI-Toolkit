// Project Plan page functionality

// Export to PDF function
function exportToPDF() {
    const element = document.getElementById('workflow-content');
    const opt = {
        margin: 0.5,
        filename: 'ai-project-plan.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}