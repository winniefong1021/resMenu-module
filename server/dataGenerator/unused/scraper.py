# import libraries
import urllib2
from bs4 import BeautifulSoup
# specify the url
quote_page = 'https://www.opentable.com/cordeiros-steakhouse?corrid=6a90d8ce-2d44-47cc-836a-fbde0a3c74c0'
page = urllib2.urlopen(quote_page)

soup = BeautifulSoup(page, 'html.parser' )
name_box = soup.find('div', attrs={id: 'menu'})
name = name_box.text.strip() # strip() is used to remove starting and trailing
print name
