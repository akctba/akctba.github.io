function createSkillGroups() {
    const skillGroupsContainer = document.querySelector('.skill-groups');
    
    Object.entries(skillsData).forEach(([category, skills]) => {
        const skillGroup = document.createElement('div');
        skillGroup.className = 'skill-group';
        
        const title = document.createElement('h3');
        title.textContent = category;
        
        const skillList = document.createElement('div');
        skillList.className = 'skill-list';
        
        skills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillList.appendChild(skillTag);
        });
        
        skillGroup.appendChild(title);
        skillGroup.appendChild(skillList);
        skillGroupsContainer.appendChild(skillGroup);
    });
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', createSkillGroups);