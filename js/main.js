function createSkillGroups() {
    const skillGroupsContainer = document.querySelector('.skill-groups');
    if (!skillGroupsContainer) {
        return;
    }

    const clearSelections = [];

    const descriptions = typeof skillExperienceDescriptions === 'object' && skillExperienceDescriptions !== null
        ? skillExperienceDescriptions
        : {};
    
    Object.entries(skillsData).forEach(([category, skills]) => {
        const skillGroup = document.createElement('div');
        skillGroup.className = 'skill-group';
        
        const title = document.createElement('h3');
        title.textContent = category;
        
        const skillList = document.createElement('div');
        skillList.className = 'skill-list';

        const detailCard = document.createElement('div');
        detailCard.className = 'skill-detail-card';
        detailCard.hidden = true;

        const detailTitle = document.createElement('h4');
        detailTitle.className = 'skill-detail-title';

        const detailBody = document.createElement('p');
        detailBody.className = 'skill-detail-text';

        detailCard.appendChild(detailTitle);
        detailCard.appendChild(detailBody);

        const clearSelection = () => {
            skillList.querySelectorAll('.skill-tag').forEach((node) => {
                node.classList.remove('is-active');
                node.setAttribute('aria-pressed', 'false');
            });
            detailCard.hidden = true;
            detailTitle.textContent = '';
            detailBody.textContent = '';
        };

        clearSelections.push(clearSelection);

        const selectSkill = (tag, skillName, description) => {
            clearSelection();

            tag.classList.add('is-active');
            tag.setAttribute('aria-pressed', 'true');
            detailTitle.textContent = skillName;
            detailBody.textContent = description;
            detailCard.hidden = false;
        };
        
        skills.forEach(skill => {
            const skillTag = document.createElement('button');
            const description = descriptions[skill] || `Hands-on experience with ${skill} in production and delivery workflows.`;

            skillTag.type = 'button';
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillTag.title = description;
            skillTag.setAttribute('aria-label', `${skill}: ${description}`);
            skillTag.setAttribute('aria-pressed', 'false');

            skillTag.addEventListener('click', () => {
                if (skillTag.classList.contains('is-active') && !detailCard.hidden) {
                    clearSelection();
                    return;
                }
                selectSkill(skillTag, skill, description);
            });

            skillList.appendChild(skillTag);
        });
        
        skillGroup.appendChild(title);
        skillGroup.appendChild(skillList);
        skillGroup.appendChild(detailCard);
        skillGroupsContainer.appendChild(skillGroup);
    });

    document.addEventListener('click', (event) => {
        const target = event.target;
        if (target instanceof Element && target.closest('.skill-tag')) {
            return;
        }

        clearSelections.forEach((clearSelection) => clearSelection());
    });
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', createSkillGroups);