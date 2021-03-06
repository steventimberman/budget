from django.db.models import Q #for querying

from money.models import Budget, Expense, Income
from .serializers import BudgetSerializer, ExpenseSerializer, IncomeSerializer

from rest_framework import generics, viewsets

class BudgetList(viewsets.ModelViewSet):
	lookup_field = 'id'
	serializer_class = BudgetSerializer
	queryset = Budget.objects.all()

	def perform_create(self, serializer):
		serializer.save(user=self.request.user)

class ExpenseList(viewsets.ModelViewSet):
	lookup_field = 'id'
	serializer_class = ExpenseSerializer
	queryset = Expense.objects.all()

	def get_queryset(self):
		qs = Expense.objects.all()
		user = self.request.query_params.get('user', None)
		if user is not None:
			qs = qs.filter(user=user)
		return qs

	def perform_create(self, serializer):
		serializer.save(user=self.request.user)

class IncomeList(viewsets.ModelViewSet):
	lookup_field = 'id'
	serializer_class = IncomeSerializer

	def get_queryset(self):
		user = self.request.user
		return Income.objects.filter(user=user)

	def perform_create(self, serializer):
		serializer.save(user=self.request.user)





