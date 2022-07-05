const rootStyles = window.getComputedStyle(document.documentElement);

rootStyles.getPropertyValue('--book-cover-width-large') != null && rootStyles.getPropertyValue('--book-cover-width-large') != '' ? ready() : document.querySelector('#main-css').addEventListener('load', ready);
    


function ready() {
    const coverWidth = rootStyles.getPropertyValue('--book-cover-width-large'),
        coverWidthRation = rootStyles.getPropertyValue('--book-cover-aspect-ration'),
        coverHeight = coverWidth / coverWidthRation;
    FilePond.registerPlugin(
        FilePondPluginImagePreview,
        FilePondPluginImageResize,
        FilePondPluginFileEncode
    );
    
    FilePond.setOptions({
        stylePanelAspectRatio: coverWidthRation, 
        imageResizeTargetWidth: coverWidth,
        imageResizeTargetHeight: coverHeight
    });
    
    FilePond.parse(document.body); 
}

