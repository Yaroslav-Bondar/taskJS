function sequence(val, step) {
    let gen = 0;
    return function() {
        if(gen) {
            if(step) {
                return gen + step
            }
        }
        return gen ? gen +  
        return gen
    }
}