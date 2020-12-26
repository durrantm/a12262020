##  Weather Forecast

Please review code first.

### Issue: 

Fix warning wehen running tests

Warning is shown below.

All unit and component tests pass but one gives a warning, this is the one (App.test.js) that renders the entire application (App)

I've tried wrapping code in `act` and have not been able to get it working so far

I am currently skipping this test and also the application does not show an issue in the UI.

Application will not run without keys set in .`env`.  
You can either grab free ones at openweathermap and rapidapi or we can pair to see it running locally on my machine.
I recently made a mistake i setting up useEffect and API calls and ran 100,000 API requests accidently so I want to make sure I avoid that again!


    Attempted to log "Warning: An update to App inside a test was not wrapped in act(...).               
                                                                                                         
    When testing, code that causes React state updates should be wrapped into act(...):                  
                                                                                                         
    act(() => {                                                                                          
      /* fire events that update state */                                                                
    });                                                                                                  
    /* assert on the output */                                                                           
                                                                                                         
    This ensures that you're testing the behavior the user would see in the browser. Learn more at https:
    //reactjs.org/link/wrap-tests-with-act                                                                   
        at App (/home/durrantm/Dropnot/code/js/react/about-your-zip-code/src/App.js:43:46)".             
                                                                                                         
      54 |     toggleUImode(UImode, setUImode);                                                          
      55 |   };                                                                                          
    > 56 |   //ignore - document.body.style.className = UImode; // eslint-disable-line no-undef          
         |     ^                                                                                         
      57 |   return (                                                                                    
      58 |     <Router>                                                                                  
      59 |       <UImodeContext.Provider value={`${UImode}`}>                                            
                                                                                                         
      at App (src/App.js:43:46)".                                                                        
      at BufferedConsole.error (node_modules/@jest/console/build/BufferedConsole.js:161:10)              
      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:67:30)                        
      at error (node_modules/react-dom/cjs/react-dom.development.js:43:5)                                
      at warnIfNotCurrentlyActingUpdatesInDEV (node_modules/react-dom/cjs/react-dom.development.js:24064:
    9)                                                                                                       
      at dispatchAction (node_modules/react-dom/cjs/react-dom.development.js:16135:9)                    
      at setLocationDetails (src/App.js:56:5)                                                            
      at src/App.js:68:9                           

