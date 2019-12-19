function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes2.forEach(function(boxes) {
        console.log(boxes);
    });
}

//O(a + b) --> because there are two different inputs

/* Third Rule: Different Terms for Inputs */

// If the for loops were nested the time complexity would be --> O(a * b)