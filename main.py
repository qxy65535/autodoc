# -*- encoding: utf-8 -*-

import os
import shutil
from functools import cmp_to_key
from bs4 import BeautifulSoup

default = 0
navbar_md = ""
headers_name = ["h1", "h2", "h3", "h4", "h5", "h6"]
# base_path = os.getcwd()
exe_path = os.path.abspath(os.path.dirname(__file__)) + "/"
doc_path = os.getcwd() + "/doc/"
dist_path = os.getcwd() + "/dist/"

# with open("template.html", "r") as f:
#     template = f.read()

# print(template)
# template = BeautifulSoup(template, "html.parser")
# links = template.find_all("div")
# links[0]["href"] = "111"
# print(links[0]["href"])
# print os.popen("ping www.baidu.com").read()

def my_filenamecmp(name1, name2):
    str1 = int(name1.split("_")[0])
    str2 = int(name2.split("_")[0])
    return str1 - str2

def get_margin(level=0):
    margin = ""
    for i in range(level):
        margin += "　"
    return margin

def combime_folder(file, header, sub_headers, level=0):
    global navbar_md
    # insert_margin(level)
    # for i in range(level):
    #     navbar_md += "    "
    navbar_md += '<details style="padding-left:'+str(level)+'em"><summary>' + get_navbar_link(file, header) + "</summary>\n\n"
    for h in sub_headers:
        space = headers_name.index(h.name)
        if h.string == None or h.string == "":
            continue
        # insert_margin(level)
        for i in range(space-1):
            navbar_md += "    "
        navbar_md += "- " + get_navbar_link(file, h) + "\n"
    navbar_md = navbar_md[:-1]+"</details>\n\n"
        # print(headers_name.index(h.name))


def get_navbar_link(file, node):
    return "[{section}]({url}#{id})".format(section=node.string, url=file, id=node["id"])

def insert_navbar_doc(file, doc_html, level=0):
    h1 = doc_html.find("h1")
    headers = doc_html.select("h2, h3, h4, h5, h6")
    # print(h1.string)
    if len(headers) == 0:
        # print(doc_html)
        insert_navbar_title(get_navbar_link(file, h1), level)
        # global navbar_md
        # navbar_md += get_navbar_link(file, h1)
    else:
        combime_folder(file, h1, headers, level)

def insert_navbar_title(title, level=0, bold=False):
    global navbar_md
    # print(title)
    # insert_margin(level)
    # for i in range(level):
    #     navbar_md += "    "
    if bold:
        navbar_md += "**"+get_margin(level)+title+"**\n\n"
    else:
        navbar_md += get_margin(level)+title+"\n\n"

def generate_html(path="", level=0):
    # doc_path = base_path + 'doc/'
    for root, dirs, files in os.walk(doc_path+path):
        global default
        total = list(dirs)
        total.extend(files)
        total.sort(key=cmp_to_key(my_filenamecmp))

        combine_doc_path = doc_path + path
        combine_dist_path = dist_path + path
        for doc in total:
            if doc in files:
        # for doc in files:
                print(path + doc)
                doc_row_html = os.popen("pandoc " + combine_doc_path + doc).read()
                # print(doc_row_html)
                doc_html = BeautifulSoup(doc_row_html, "html.parser")
                filename = doc.split(".")[0]
                insert_navbar_doc(path+filename, doc_html, level)
                if not os.path.exists(combine_dist_path):
                    os.makedirs(combine_dist_path)
                with open(combine_dist_path+filename+".html", "w") as f:
                    f.write(doc_html.prettify(formatter="html"))
                if default == 0:  # 第一个文件作为default.html
                    with open(combine_dist_path+"default.html", "w") as f:
                        f.write(doc_html.prettify(formatter="html"))
                    default = 1
        # for d in dirs:
            elif doc in dirs:
                insert_navbar_title(doc, level, bold=True)
                generate_html(path+doc+"/", level+1)
        break

# print(os.getcwd())
if os.path.exists(dist_path):
    shutil.rmtree(dist_path)
generate_html()
with open("navbar.md", "w") as f:
    f.write(navbar_md)

navbar_row_html = os.popen("pandoc navbar.md").read()
# navbar_row_html = "<div>"+navbar_row_html+"</div>"
# print(navbar_row_html)
os.remove("navbar.md")

# # navbar_html = BeautifulSoup("<div></div>", "html.parser")
# print(navbar_html)

# navbar_html.div.wrap(template.select(id="left"))
# # template.find(id="left").insert(navbar_html)

with open(dist_path+"navbar.html", "w") as f:
    f.write(navbar_row_html)

shutil.copyfile(exe_path+"/template.html", dist_path+"index.html")
shutil.copytree(exe_path+"/statics", dist_path+"statics")
print("done.")