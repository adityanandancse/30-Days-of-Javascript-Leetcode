class EventEmitter {
    
    
    subscribe(eventName, callback) {
        
        return {
            unsubscribe: () => {
                
            }
        };
    }

    emit(eventName, args = []) {
        
    }
}
