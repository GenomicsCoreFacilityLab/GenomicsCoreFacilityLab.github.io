function UpdatePageSize(val) {
    document.getElementById('pageSize_SearchOption').value = val.options[val.options.selectedIndex].value;
}

(function () {
    function SearchFilter() {

        let filterElement = document.querySelector(".search-options-button");
        let searchOptionsEle = document.getElementById("search-options");
        let searchToggleEle = document.getElementById("submit-button-toggle");

        if (typeof filterElement !== 'undefined' && filterElement !== null) {
            filterElement.addEventListener("click", (e) => {
                searchOptionsEle.classList.toggle("hide");
                searchToggleEle.classList.toggle("hide");
                filterElement.classList.toggle("arrow-down");
            });
        }
    }
    function OnSerachUpdate() {
        //search results page input
        let filterElement = document.getElementById("SearchOption_SearchPhrase");
        if (typeof filterElement !== 'undefined' && filterElement !== null) {
            filterElement.addEventListener("input", (e) => {
                IsAlphaNumeric(e, 'searchresults')
            });
        }
     
        //site search in header input
        let filterMslpElement = document.getElementById("SearchKeywords");
        if (typeof filterMslpElement !== 'undefined' && filterMslpElement !== null) {
            filterMslpElement.addEventListener("input", (e) => {
                IsAlphaNumeric(e, 'sitesearch')
            });
        }
        //SearchKeywordsMobile
        let filterMobileElement = document.getElementById("SearchKeywordsMobile");
        if (typeof filterMobileElement !== 'undefined' && filterMobileElement !== null) {
            filterMobileElement.addEventListener("input", (e) => {
                IsAlphaNumeric(e, 'mobile')
            });
        }
        //SearchKeywordsHome
        let filterHomeElement = document.getElementById("SearchKeywordsHome");
        if (typeof filterHomeElement !== 'undefined' && filterHomeElement !== null) {
            filterHomeElement.addEventListener("input", (e) => {
                IsAlphaNumeric(e, 'home')
            });
        }
    }

    function IsAlphaNumeric(e, whichinput) {
 
        //create the list of special chars to loop through and set the error message
        var listToExclude = ['~', '$', '^', '&', '*', '(', ')', '+', '=', '[', ']', '{', '}', '\\', '|', ';', ':', '\"', '\'', '<', '>', '/'];
        var listToExcludeStr1 = "Please remove the character ";
        var listToExcludeStr1a = "One or more special characters needs to be removed.";
        var listToExcludeStr2 = "<br />Special Characters not allowed";
        for (let i = 0; i < listToExclude.length; i++) {
            listToExcludeStr2 += " " + listToExclude[i];
        }
        
        switch (whichinput) {
            case 'searchresults':
                var inputTextField = document.getElementById("SearchOption_SearchPhrase");
                var errorMessage = document.getElementById("charerror");
                var submitButtonTop = document.getElementById("search-button-id");
                var submitButtonBottom = document.getElementById("submit-button-toggle");
                break;
            case 'sitesearch':
                var inputTextField = document.getElementById("SearchKeywords");
                var errorMessage = document.getElementById("searchErrMsg");
                var submitButtonTop = document.getElementById("SearchButton"); 
                break;
            case 'mobile':
                var inputTextField = document.getElementById("SearchKeywordsMobile");
                var errorMessage = document.getElementById("searchErrMsgMobile");
                var submitButtonTop = document.getElementById("SearchButtonMobile");
                break;
            case 'home':
                var inputTextField = document.getElementById("SearchKeywordsHome");
                var errorMessage = document.getElementById("searchErrMsgHome");
                var submitButtonTop = document.getElementById("SearchButtonHome");
                break;
            default:
                return null;
        }



        if (e.data != null) {
            var ret = listToExclude.find((el) => e.data.includes(el));
            if (ret) {
                inputTextField.setAttribute("aria-invalid", "true");
                errorMessage.classList.remove("hide");
                errorMessage.innerHTML = "";
                errorMessage.innerHTML = listToExcludeStr1 + e.data + listToExcludeStr2;
                submitButtonTop.disabled = true;
                submitButtonTop.setAttribute("aria-disabled", "true");
                if (typeof submitButtonBottom !== 'undefined' && submitButtonBottom !== null) {
                    submitButtonBottom.disabled = true;
                    submitButtonBottom.setAttribute("aria-disabled", "true");
                }
            }

            return ret;
        }
        else if (listToExclude.some(v => inputTextField.value.includes(v))) {
            // There's at least one that still exists
            inputTextField.setAttribute("aria-invalid", "true");
            errorMessage.classList.remove("hide");
            errorMessage.innerHTML = "";
            errorMessage.innerHTML = listToExcludeStr1a + listToExcludeStr2;
            submitButtonTop.disabled = true;
            submitButtonTop.setAttribute("aria-disabled", "true");
            if (typeof submitButtonBottom !== 'undefined' && submitButtonBottom !== null) {
                submitButtonBottom.disabled = true;
                submitButtonBottom.setAttribute("aria-disabled", "true");
            }

            return ret;

        } else {
            //default
            inputTextField.setAttribute("aria-invalid", "false");
            errorMessage.classList.add("hide");
            errorMessage.innerHTML = "";
            submitButtonTop.disabled = false;
            submitButtonTop.setAttribute("aria-disabled", "false");
            if (typeof submitButtonBottom !== 'undefined' && submitButtonBottom !== null) {
                submitButtonBottom.disabled = false;
                submitButtonBottom.setAttribute("aria-disabled", "false");
            }

        }
        return ret;

    }


    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(1, SearchFilter);
        setTimeout(1, OnSerachUpdate);
    } else {
        document.addEventListener("DOMContentLoaded", SearchFilter);
        document.addEventListener("DOMContentLoaded", OnSerachUpdate);
    }
})();