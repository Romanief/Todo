# Generated by Django 4.1.2 on 2023-03-18 09:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_dailytasks_tasks_delete_task'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='DailyTasks',
            new_name='DailyTask',
        ),
        migrations.RenameModel(
            old_name='Tasks',
            new_name='Task',
        ),
    ]
