<template>
    <div id="project-container">
        <div class="project-information" 
            :class="{'project-hidden' : show_project_information}"
            @mouseover="show_project_information = true"
            @mouseleave="show_project_information = false">
            <h3>{{ projectTitle }}</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci doloremque laborum illo sint impedit quas asperiores eius alias odio, delectus rem et minima enim, in consequatur iure architecto corporis. Esse!</p>
            <div class="project-information__technologies-container">
                <!--- populate with technologies data -->
            </div>
            <button class="project-information__read-more">Read More</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProjectCard',
        props: ['projectTitle', 'projectInformation', 'projectTechnologies', 'projectLink'],
        data: function() {
            return {
                show_project_information: false
            }
        }
    }
</script>

<style lang="css" scoped>

</style>