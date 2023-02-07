const change_svg_color = function (objectElement, color, class_to_change = '.st0') {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', objectElement.data, true);
    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(this.responseText, 'image/svg+xml');
            const elements = svgDoc.querySelectorAll(class_to_change);
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.fill = color;
            }
            objectElement.data = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(svgDoc));
        }
    };
    xhr.send();
}