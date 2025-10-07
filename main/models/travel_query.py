from django.db import models

from django.utils import timezone

class TravelQuery(models.Model):
    from_date = models.DateField()
    to_date = models.DateField()
    destination = models.CharField(max_length=100)
    adults = models.PositiveIntegerField()
    children = models.PositiveIntegerField()
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"Travel to {self.destination} from {self.from_date} to {self.to_date} for {self.adults} adults and {self.children} children"