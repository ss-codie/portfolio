Portfolio = {

};

Portfolio.Consts = {
    DEBUG: 1
};

Portfolio.UI = {

};

Portfolio.Events = {
    bindEvents: function () {
        try {
            $(".project-front").on('transitionend', Portfolio.Events.onProjectFrontTransitionend);

            $(".project-back").mouseleave(Portfolio.Events.onProjectBackMouseLeave);
        }
        catch (ex) {
            Portfolio.Helper.logError(ex);
        }
    },

    onProjectFrontTransitionend: function(e) {
        let parents = $(e.target).parents();
        if (parents) {
            if (parents.hasClass('project-1')) {
                $(".project-1 .project-front").css('opacity', 0);
                $(".project-1 .project-back").removeClass("hidden");
            } else if (parents.hasClass('project-2')) {
                $(".project-2 .project-front").css('opacity', 0);
                $(".project-2 .project-back").removeClass("hidden");
            } else if (parents.hasClass('project-3')) {
                $(".project-3 .project-front").css('opacity', 0);
                $(".project-3 .project-back").removeClass("hidden");
            }
        }
    },

    onProjectBackMouseLeave: function (e) {
        let parents = $(e.target).parents();
        if (parents) {
            if (parents.hasClass('project-1')) {
                $(".project-1 .project-back").addClass("hidden");
                $(".project-1 .project-front").css('opacity', 1);
            } else if (parents.hasClass('project-2')) {
                $(".project-2 .project-back").addClass("hidden");
                $(".project-2 .project-front").css('opacity', 1);
            } else if (parents.hasClass('project-3')) {
                $(".project-3 .project-back").addClass("hidden");
                $(".project-3 .project-front").css('opacity', 1);
            }
        }
    }
};

Portfolio.Helper = {
    logError(ex) {
        if (Portfolio.Consts.DEBUG === 1) {
            return;
        }

        console.log(ex);
    }
};

$(document).ready(function () {
    Portfolio.Events.bindEvents();
})
