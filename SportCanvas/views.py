from django.views.generic import TemplateView

class HomePage(TemplateView):
    template_name = 'index.html'

class DieteticsPage(TemplateView):
    template_name = 'dietetics.html'

class NewsPage(TemplateView):
    template_name = 'news.html'

class TrainingPage(TemplateView):
    template_name = 'trainingvideos.html'

class CalenderPage(TemplateView):
    template_name = 'calender.html'