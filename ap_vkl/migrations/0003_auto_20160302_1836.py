# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-03-03 02:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ap_vkl', '0002_auto_20160302_1811'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='handle',
        ),
        migrations.AddField(
            model_name='user',
            name='name',
            field=models.CharField(blank=True, max_length=10),
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=128, unique=True),
        ),
    ]