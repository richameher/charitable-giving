{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": 1,
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "Requirement already satisfied: selenium in c:\\users\\rushal\\anaconda\\lib\\site-packages (3.141.0)\n",
      "Requirement already satisfied: urllib3 in c:\\users\\rushal\\anaconda\\lib\\site-packages (from selenium) (1.25.9)\n"
     ]
    }
   ],
   "source": [
    "!pip install selenium\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 1,
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "Collecting instaloader\n",
      "  Downloading instaloader-4.7.5.tar.gz (50 kB)\n",
      "Requirement already satisfied: requests>=2.4 in c:\\users\\rushal\\anaconda\\lib\\site-packages (from instaloader) (2.24.0)\n",
      "Requirement already satisfied: urllib3!=1.25.0,!=1.25.1,<1.26,>=1.21.1 in c:\\users\\rushal\\anaconda\\lib\\site-packages (from requests>=2.4->instaloader) (1.25.9)\n",
      "Requirement already satisfied: certifi>=2017.4.17 in c:\\users\\rushal\\anaconda\\lib\\site-packages (from requests>=2.4->instaloader) (2020.6.20)\n",
      "Requirement already satisfied: chardet<4,>=3.0.2 in c:\\users\\rushal\\anaconda\\lib\\site-packages (from requests>=2.4->instaloader) (3.0.4)\n",
      "Requirement already satisfied: idna<3,>=2.5 in c:\\users\\rushal\\anaconda\\lib\\site-packages (from requests>=2.4->instaloader) (2.10)\n",
      "Building wheels for collected packages: instaloader\n",
      "  Building wheel for instaloader (setup.py): started\n",
      "  Building wheel for instaloader (setup.py): finished with status 'done'\n",
      "  Created wheel for instaloader: filename=instaloader-4.7.5-py3-none-any.whl size=54763 sha256=5ccee8dcadab08a7ebe9b96652ca7bc5f360594a18b8e6ad6ed08ff6753e17b4\n",
      "  Stored in directory: c:\\users\\rushal\\appdata\\local\\pip\\cache\\wheels\\ae\\ad\\d2\\ad35c79af1f2eb6ef0c4149367dac4f66bea55d3b251151f83\n",
      "Successfully built instaloader\n",
      "Installing collected packages: instaloader\n",
      "Successfully installed instaloader-4.7.5\n"
     ]
    }
   ],
   "source": [
    "!pip install instaloader\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 21,
   "metadata": {},
   "outputs": [
    {
     "ename": "AttributeError",
     "evalue": "partially initialized module 'pandas' has no attribute 'compat' (most likely due to a circular import)",
     "output_type": "error",
     "traceback": [
      "\u001b[1;31m---------------------------------------------------------------------------\u001b[0m",
      "\u001b[1;31mAttributeError\u001b[0m                            Traceback (most recent call last)",
      "\u001b[1;32m<ipython-input-21-571342716b3e>\u001b[0m in \u001b[0;36m<module>\u001b[1;34m\u001b[0m\n\u001b[0;32m      3\u001b[0m \u001b[1;32mimport\u001b[0m \u001b[0mjson\u001b[0m\u001b[1;33m\u001b[0m\u001b[1;33m\u001b[0m\u001b[0m\n\u001b[0;32m      4\u001b[0m \u001b[1;32mimport\u001b[0m \u001b[0mcsv\u001b[0m\u001b[1;33m\u001b[0m\u001b[1;33m\u001b[0m\u001b[0m\n\u001b[1;32m----> 5\u001b[1;33m \u001b[1;32mimport\u001b[0m \u001b[0mpandas\u001b[0m \u001b[1;32mas\u001b[0m \u001b[0mpd\u001b[0m\u001b[1;33m\u001b[0m\u001b[1;33m\u001b[0m\u001b[0m\n\u001b[0m\u001b[0;32m      6\u001b[0m \u001b[1;32mfrom\u001b[0m \u001b[0mtime\u001b[0m \u001b[1;32mimport\u001b[0m \u001b[0msleep\u001b[0m\u001b[1;33m\u001b[0m\u001b[1;33m\u001b[0m\u001b[0m\n\u001b[0;32m      7\u001b[0m \u001b[1;32mfrom\u001b[0m \u001b[0mdatetime\u001b[0m \u001b[1;32mimport\u001b[0m \u001b[0mdate\u001b[0m\u001b[1;33m\u001b[0m\u001b[1;33m\u001b[0m\u001b[0m\n",
      "\u001b[1;32m~\\anaconda\\lib\\site-packages\\pandas\\__init__.py\u001b[0m in \u001b[0;36m<module>\u001b[1;34m\u001b[0m\n\u001b[0;32m    191\u001b[0m \u001b[1;31m# GH 27101\u001b[0m\u001b[1;33m\u001b[0m\u001b[1;33m\u001b[0m\u001b[1;33m\u001b[0m\u001b[0m\n\u001b[0;32m    192\u001b[0m \u001b[1;31m# TODO: remove Panel compat in 1.0\u001b[0m\u001b[1;33m\u001b[0m\u001b[1;33m\u001b[0m\u001b[1;33m\u001b[0m\u001b[0m\n\u001b[1;32m--> 193\u001b[1;33m \u001b[1;32mif\u001b[0m \u001b[0mpandas\u001b[0m\u001b[1;33m.\u001b[0m\u001b[0mcompat\u001b[0m\u001b[1;33m.\u001b[0m\u001b[0mPY37\u001b[0m\u001b[1;33m:\u001b[0m\u001b[1;33m\u001b[0m\u001b[1;33m\u001b[0m\u001b[0m\n\u001b[0m\u001b[0;32m    194\u001b[0m \u001b[1;33m\u001b[0m\u001b[0m\n\u001b[0;32m    195\u001b[0m     \u001b[1;32mdef\u001b[0m \u001b[0m__getattr__\u001b[0m\u001b[1;33m(\u001b[0m\u001b[0mname\u001b[0m\u001b[1;33m)\u001b[0m\u001b[1;33m:\u001b[0m\u001b[1;33m\u001b[0m\u001b[1;33m\u001b[0m\u001b[0m\n",
      "\u001b[1;31mAttributeError\u001b[0m: partially initialized module 'pandas' has no attribute 'compat' (most likely due to a circular import)"
     ]
    }
   ],
   "source": [
    "from selenium import webdriver\n",
    "from bs4 import BeautifulSoup as bs\n",
    "import json\n",
    "import csv\n",
    "import pandas as pd\n",
    "from time import sleep\n",
    "from datetime import date\n",
    "import instaloader\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 22,
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "['khaanachahiye', '', '', '', '', 'hemkunt_foundation', 'missionoxygenindia', 'missionoxygenindia', 'missionoxygenindia', '', '', '', '', '', '', '', '', 'give_india', 'give_india', 'give_india', 'give_india', 'give_india', 'give_india', 'give_india', 'give_india', 'give_india', 'give_india', 'yeinudaan', 'indiao2org', 'indiao2org', 'swasthorg', 'rotibankfdn', 'feedingindia']\n"
     ]
    }
   ],
   "source": [
    "usernames =[]\n",
    "usernames1=[]\n",
    "charity_id =[]\n",
    "with open('C:/Users/RUSHAL/research/scripts/charitable-giving/data/charities_list_clean.csv', 'r') as file:\n",
    "#change to appt path\n",
    "    reader = csv.reader(file)\n",
    "    for row in reader:\n",
    "        usernames.append(row[17])\n",
    "        \n",
    "        charity_id.append(row[0])\n",
    "usernames = (usernames[1:])\n",
    "charity_id = (charity_id[1:])\n",
    "# print(usernames)\n",
    "for username in usernames:\n",
    "\n",
    "    username1 = username[26:-1]\n",
    "#     print(username1)\n",
    "    usernames1.append(username1)\n",
    "# # print(len(charity_id))\n",
    "print((usernames1))\n",
    "#extract the last time add as column value "
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "khaanachahiye\n",
      "<instaloader.nodeiterator.NodeIterator object at 0x00000242FCCD9F70>\n"
     ]
    },
    {
     "name": "stderr",
     "output_type": "stream",
     "text": [
      "JSON Query to graphql/query: ('Connection aborted.', RemoteDisconnected('Remote end closed connection without response')) [retrying; skip with ^C]\n"
     ]
    }
   ],
   "source": [
    "final2=[];\n",
    "for username1 in usernames1:\n",
    "    if username1 != '':\n",
    "        url = username1#+'?__a=1'\n",
    "        print(url)\n",
    "        \n",
    "        import instaloader\n",
    "        from time import sleep\n",
    "        \n",
    "        \n",
    "        username1 = \"decidetodonatetoday@gmail.com\"\n",
    "        password = \"Charitable-Giving123\"\n",
    "\n",
    "\n",
    "        L = instaloader.Instaloader()\n",
    "        L.login(username1, password)\n",
    "        posts = instaloader.Profile.from_username(L.context, url).get_posts()\n",
    "        print(posts)\n",
    "        users = set()\n",
    "        all_time =[]\n",
    "        for post in posts:\n",
    "            # if not post.owner_profile in users:\n",
    "                x = ((post.date))\n",
    "                all_time.append(x)\n",
    "        final2.append(all_time[0]) \n",
    "        sleep(120)#wait\n",
    "    else:\n",
    "        final2.append('no data')\n",
    "# driver.close ()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 17,
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "t\n"
     ]
    },
    {
     "ename": "AttributeError",
     "evalue": "'str' object has no attribute 'month'",
     "output_type": "error",
     "traceback": [
      "\u001b[1;31m---------------------------------------------------------------------------\u001b[0m",
      "\u001b[1;31mAttributeError\u001b[0m                            Traceback (most recent call last)",
      "\u001b[1;32m<ipython-input-17-b57f7b16537d>\u001b[0m in \u001b[0;36m<module>\u001b[1;34m\u001b[0m\n\u001b[0;32m     13\u001b[0m         \u001b[1;32mif\u001b[0m \u001b[0mfinal\u001b[0m\u001b[1;33m[\u001b[0m\u001b[0mi\u001b[0m\u001b[1;33m]\u001b[0m \u001b[1;33m!=\u001b[0m \u001b[1;34m'no data'\u001b[0m\u001b[1;33m:\u001b[0m\u001b[1;33m\u001b[0m\u001b[1;33m\u001b[0m\u001b[0m\n\u001b[0;32m     14\u001b[0m             \u001b[0mtoday\u001b[0m \u001b[1;33m=\u001b[0m \u001b[0mdate\u001b[0m\u001b[1;33m.\u001b[0m\u001b[0mtoday\u001b[0m\u001b[1;33m(\u001b[0m\u001b[1;33m)\u001b[0m\u001b[1;33m\u001b[0m\u001b[1;33m\u001b[0m\u001b[0m\n\u001b[1;32m---> 15\u001b[1;33m             \u001b[0mwhen\u001b[0m \u001b[1;33m=\u001b[0m \u001b[1;33m(\u001b[0m\u001b[1;33m(\u001b[0m\u001b[0mtoday\u001b[0m\u001b[1;33m.\u001b[0m\u001b[0mmonth\u001b[0m \u001b[1;33m-\u001b[0m \u001b[0mfinal\u001b[0m\u001b[1;33m[\u001b[0m\u001b[0mi\u001b[0m\u001b[1;33m]\u001b[0m\u001b[1;33m.\u001b[0m\u001b[0mmonth\u001b[0m\u001b[1;33m)\u001b[0m\u001b[1;33m)\u001b[0m\u001b[1;33m;\u001b[0m\u001b[1;33m\u001b[0m\u001b[1;33m\u001b[0m\u001b[0m\n\u001b[0m\u001b[0;32m     16\u001b[0m             \u001b[0mwhen_str\u001b[0m \u001b[1;33m=\u001b[0m \u001b[0mstr\u001b[0m\u001b[1;33m(\u001b[0m\u001b[0mwhen\u001b[0m\u001b[1;33m)\u001b[0m\u001b[1;33m\u001b[0m\u001b[1;33m\u001b[0m\u001b[0m\n\u001b[0;32m     17\u001b[0m             \u001b[0mtimetype\u001b[0m \u001b[1;33m=\u001b[0m \u001b[1;34m\" months ago\"\u001b[0m\u001b[1;33m\u001b[0m\u001b[1;33m\u001b[0m\u001b[0m\n",
      "\u001b[1;31mAttributeError\u001b[0m: 'str' object has no attribute 'month'"
     ]
    }
   ],
   "source": [
    "import csv  \n",
    "from datetime import date\n",
    "final =final2\n",
    "print((final[0]))\n",
    "#change to appt path\n",
    "with open('C:/Users/RUSHAL/research/scripts/charitable-giving/data/time_updates.csv', 'w', encoding='UTF8',newline='') as f:\n",
    "    writer = csv.writer(f)\n",
    "    header = ['charity_id','last_updated']\n",
    "    # write the header\n",
    "    writer.writerow(header)\n",
    "    time_update = []\n",
    "    for i in range((33)): \n",
    "        if final[i] != 'no data':\n",
    "            today = date.today()\n",
    "            when = ((today.month - final[i].month));\n",
    "            when_str = str(when)\n",
    "            timetype = \" months ago\"\n",
    "            if (when == 0):\n",
    "                when = (today.day - final[i].day)\n",
    "                when_str = str(when)\n",
    "                timetype = \" days ago \"\n",
    "                if (when== 0):                    \n",
    "                    timetype = \"today\"\n",
    "                    when_str = ''\n",
    "            time_update.append(\"Last Activity was \" + (when_str) +timetype)\n",
    "        else:\n",
    "            time_update.append(final[i])     \n",
    "        \n",
    "        data = charity_id[i],time_update[i]        \n",
    "        # write the data\n",
    "        writer.writerow(data)\n",
    "        \n",
    "# print(final,time_update)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 26,
   "metadata": {
    "scrolled": true
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "Last Activity was\n",
      "2\n",
      "days ago\n"
     ]
    }
   ],
   "source": [
    "# Below code is for extracting images from charties ignore for now"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 28,
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "img_1_link\n",
      "https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/207497716_501755017605620_5150390275455122548_n.jpg?tp=1&amp;_nc_ht=scontent-ort2-1.cdninstagram.com&amp;_nc_cat=108&amp;_nc_ohc=kVLwaezHrFMAX_IHEmL&amp;edm=ABfd0MgBAAAA&amp;ccb=7-4&amp;oh=a3533c78631645e0de90c6d03be95b4f&amp;oe=60E03E06&amp;_nc_sid=7bff83\n",
      "img_2_link\n",
      "https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/208986842_330836981977498_2942736526505977374_n.jpg?tp=1&amp;_nc_ht=scontent-ort2-1.cdninstagram.com&amp;_nc_cat=110&amp;_nc_ohc=G-f507C__yAAX-G77MD&amp;edm=ABfd0MgBAAAA&amp;ccb=7-4&amp;oh=84abe008bec80989a1381592bb2c439f&amp;oe=60DA8119&amp;_nc_sid=7bff83\n",
      "img_3_link\n",
      "https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/207229257_656665932395866_4205776160381453775_n.jpg?tp=1&amp;_nc_ht=scontent-ort2-1.cdninstagram.com&amp;_nc_cat=110&amp;_nc_ohc=gvNHvwt6il4AX-68UhB&amp;edm=ABfd0MgBAAAA&amp;ccb=7-4&amp;oh=49b5dcf4c9e05b356271229166ac05f5&amp;oe=60E17225&amp;_nc_sid=7bff83\n"
     ]
    }
   ],
   "source": [
    "print(\"img_1_link\")\n",
    "print(img_1_link)\n",
    "print(\"img_2_link\")\n",
    "print(img_2_link)\n",
    "print(\"img_3_link\")\n",
    "print(img_3_link)\n",
    "\n",
    "\n",
    "#remove amp; from the final string"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "# https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/209001440_805651086805802_5923460562293731077_n.jpg?tp=1&_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=7LGJzbhMW6EAX-uVXWm&edm=ABfd0MgBAAAA&ccb=7-4&oh=80382580154e03c7496405b1d0938e3a&oe=60DAA6FC&_nc_sid=7bff83\n",
    "# https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/207497716_501755017605620_5150390275455122548_n.jpg?tp=1&amp;_nc_ht=scontent-ort2-1.cdninstagram.com&amp;_nc_cat=108&amp;_nc_ohc=kVLwaezHrFMAX_IHEmL&amp;edm=ABfd0MgBAAAA&amp;ccb=7-4&amp;oh=a3533c78631645e0de90c6d03be95b4f&amp;oe=60E03E06&amp;_nc_sid=7bff83    "
   ]
  }
 ],
 "metadata": {
  "celltoolbar": "Raw Cell Format",
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.8.3"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 4
}
